using Google.Apis.Sheets.v4;

namespace IotDashboard.Services
{
    public class InitializeService
    {
        private readonly IConfiguration _configuration;
        public InitializeService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public SheetsService SheetsServiceInitializer_MudCrab()
        {
            return new SheetsService(new Google.Apis.Services.BaseClientService.Initializer()
            {
                ApiKey = _configuration.GetSection("SpreadSheet_MudCrab:apiKey").Get<string>(),
                ApplicationName = _configuration.GetSection("SpreadSheet_MudCrab:appName").Get<string>()
            });
        }

        public SheetsService SheetsServiceInitializer_Paddy()
        {
            return new SheetsService(new Google.Apis.Services.BaseClientService.Initializer()
            {
                ApiKey = _configuration.GetSection("SpreadSheet_Paddy:apiKey").Get<string>(),
                ApplicationName = _configuration.GetSection("SpreadSheet_Paddy:appName").Get<string>()
            });
        }
    }
}
