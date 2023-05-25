using Google.Apis.Sheets.v4;

namespace IotDashboard.Services
{
    public class RequestService
    {
        public IList<IList<object>> GetRequestSheetsService_MudCrab(string range, string spreadSheetId, SheetsService service)
        {
            var request = service.Spreadsheets.Values.Get(spreadSheetId, range);
            var values = request.Execute();
            return values.Values;
        }

        public IList<IList<object>> GetRequestSheetsService_Paddy(string range, string spreadSheetId, SheetsService service)
        {
            var request = service.Spreadsheets.Values.Get(spreadSheetId, range);
            var values = request.Execute();
            return values.Values;
        }
    }
}
