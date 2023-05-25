using IotDashboard.Models;
using IotDashboard.Services;
using Microsoft.AspNetCore.Mvc;

namespace IotDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MudCrabController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly InitializeService _initializeService;
        private readonly RequestService _requestService;

        //declare method 1
        private readonly string spreadSheetId;
        private readonly string sheet;
        private readonly string range;

        public MudCrabController(IConfiguration configuration, InitializeService initializeService, RequestService requestService)
        {
            _configuration = configuration;
            _initializeService = initializeService;
            _requestService = requestService;

            //declare method 1
            spreadSheetId = _configuration.GetSection("SpreadSheet_MudCrab:spreadSheetId").Get<string>();
            sheet = _configuration.GetSection("SpreadSheet_MudCrab:sheet").Get<string>();
            range = $"{sheet}!A:E";
        }

        [HttpGet]
        [Route("getMudcrabData")]
        public ActionResult<IEnumerable<Mudcrab_Reading>> MubcrabData()
        {
            //declare method 2
            //var spreadSheetId = _configuration.GetSection("SpreadSheet_MudCrab:spreadSheetId").Get<string>();
            //var sheet = _configuration.GetSection("SpreadSheet_MudCrab:sheet").Get<string>();
            //var range = $"{sheet}!A:E";

            var values = _requestService.GetRequestSheetsService_MudCrab(range, spreadSheetId, _initializeService.SheetsServiceInitializer_MudCrab());

            List<Mudcrab_Reading> reading = new();

            for (int i = values.Count - 24; i < values.Count; i++)
            {
                var isValidDate = DateTime.TryParse(values[i][0].ToString(), out var dateTime);
                var validatedDate = isValidDate ? dateTime : DateTime.MinValue;

                reading.Add(new Mudcrab_Reading()
                {
                    date = validatedDate.ToString("MM/dd/yyyy HH:mm"),
                    temperature = Convert.ToInt32(values[i][1].ToString()),
                    pH = Convert.ToDouble(values[i][2].ToString()),
                    salinity = Convert.ToInt32(values[i][3].ToString()),
                    waterLevel = Convert.ToInt32(values[i][4].ToString()),
                });
            }

            return Ok(reading);
        }

        [HttpGet]
        [Route("getMudcrabAvg")]
        public ActionResult<IEnumerable<Mudcrab_Average>> MudcrabAvg()
        {

            var values = _requestService.GetRequestSheetsService_MudCrab(range, spreadSheetId, _initializeService.SheetsServiceInitializer_MudCrab());

            List<Mudcrab_Average> average = new();

            int totalTemperature = 0;
            double totalpH = 0;
            int totalSalinity = 0;
            int totalWaterLevel = 0;

            int index = 0;
            int now = 0;

            for (int i = values.Count - 240; i < values.Count; i++)
            {

                totalTemperature += Convert.ToInt32(values[i][1].ToString());
                totalpH += Convert.ToDouble(values[i][2].ToString());
                totalSalinity += Convert.ToInt32(values[i][3].ToString());
                totalWaterLevel += Convert.ToInt32(values[i][4].ToString());

                index++;

                if (index == 24)
                {
                    now++;

                    Console.WriteLine(index + " | " + now);

                    average.Add(new Mudcrab_Average()
                    {
                        avgTemperature = Convert.ToInt32((totalTemperature / 24).ToString("#.#")),
                        avgpH = Convert.ToDouble((totalpH / 24).ToString("#.#")),
                        avgSalinity = Convert.ToInt32((totalSalinity / 24).ToString("#.#")),
                        avgWaterLevel = Convert.ToInt32((totalWaterLevel / 24).ToString()),
                    });

                    totalTemperature = 0;
                    totalpH = 0;
                    totalSalinity = 0;
                    totalWaterLevel = 0;

                    index = 0;
                }

            }

            return Ok(average);

        }

    }
}

