using IotDashboard.Models;
using IotDashboard.Services;
using Microsoft.AspNetCore.Mvc;

namespace IotDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaddyController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        private readonly InitializeService _initializeService;
        private readonly RequestService _requestService;

        //declare method 1
        private readonly string spreadSheetId;
        private readonly string sheet;
        private readonly string range;

        public PaddyController(IConfiguration configuration, InitializeService initializeService, RequestService requestService)
        {
            _configuration = configuration;
            _initializeService = initializeService;
            _requestService = requestService;

            //declare method 1
            spreadSheetId = _configuration.GetSection("SpreadSheet_Paddy:spreadSheetId").Get<string>();
            sheet = _configuration.GetSection("SpreadSheet_Paddy:sheet").Get<string>();
            range = $"{sheet}!A:D";
        }

        [HttpGet]
        [Route("getPaddyData")]
        public ActionResult<IEnumerable<Paddy_Reading>> GetPaddyData()
        {
            //declare method 2
            //var spreadSheetId = _configuration.GetSection("SpreadSheet_Paddy:spreadSheetId").Get<string>();
            //var sheet = _configuration.GetSection("SpreadSheet_Paddy:sheet").Get<string>();
            //var range = $"{sheet}!A:E";

            var values = _requestService.GetRequestSheetsService_Paddy(range, spreadSheetId, _initializeService.SheetsServiceInitializer_Paddy());

            List<Paddy_Reading> reading = new();

            for (int i = values.Count - 24; i < values.Count; i++)
            {
                var isValidDate = DateTime.TryParse(values[i][0].ToString(), out var dateTime);
                var validatedDate = isValidDate ? dateTime : DateTime.MinValue;

                reading.Add(new Paddy_Reading()
                {
                    date = validatedDate.ToString("MM/dd/yyyy HH:mm"),
                    temperature = Convert.ToInt32(values[i][1].ToString()),
                    moisture = Convert.ToInt32(values[i][2].ToString()),
                    waterLevel = Convert.ToInt32(values[i][3].ToString()),
                });
            }

            return Ok(reading);
        }

        [HttpGet]
        [Route("getPaddyAvg")]
        public ActionResult<IEnumerable<Paddy_Average>> PaddyAvg()
        {

            var values = _requestService.GetRequestSheetsService_Paddy(range, spreadSheetId, _initializeService.SheetsServiceInitializer_Paddy());

            List<Paddy_Average> average = new();

            int totalTemperature = 0;
            int totalMoisture = 0;
            int totalWaterLevel = 0;

            int index = 0;
            int now = 0;

            for (int i = values.Count - 240; i < values.Count; i++)
            {

                totalTemperature += Convert.ToInt32(values[i][1].ToString());
                totalMoisture += Convert.ToInt32(values[i][2].ToString());
                totalWaterLevel += Convert.ToInt32(values[i][3].ToString());

                index++;

                if (index == 24)
                {
                    now++;

                    Console.WriteLine(index + " | " + now);

                    average.Add(new Paddy_Average()
                    {
                        avgTemperature = Convert.ToInt32((totalTemperature / 24).ToString("#.#")),
                        avgMoisture = Convert.ToInt32((totalMoisture / 24).ToString("#.#")),
                        avgWaterLevel = Convert.ToInt32((totalWaterLevel / 24).ToString()),
                    });

                    totalTemperature = 0;
                    totalMoisture = 0;
                    totalWaterLevel = 0;

                    index = 0;
                }

            }

            return Ok(average);
        }

    }
}
