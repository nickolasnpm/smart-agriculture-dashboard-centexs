# Smart Agriculture Dashboard

Smart Agriculture Dashboard is developed to monitor the environment of two agriculture prototype systems, namely the paddy field monitoring system and the mud crab monitoring system. By using this dashboard, farmers can monitor the variables that impact the growth and harvest quality of both products. 

## Technologies 

This dashboard is developed by using the following languages and frameworks

1. Front-end: HTML, CSS, TypeScript, Angular, ChartJS
2. Back-end: C#, .NET 6
3. Database: Google Sheet

## Installation

Use the git command to install Smart Agriculture Dashboard

```bash
git clone https://github.com/nickolasnpm/smart-agriculture-dashboard-centexs.git 
```

## Running

### Toolsets

To run this project on your machine, please ensure that you have the following tools:

1. Visual Studio Code or any other Code Editor of your choice

```bash
https://code.visualstudio.com/
```

2. NodeJs

```bash
https://nodejs.org/en
```

3. .NET SDK and .NET Runtime

```bash
https://dotnet.microsoft.com/en-us/download/dotnet/6.0
```

### User Secret

User secret is a place for you to keep all confidential information that enable you to connect with Google Sheet Database. Please insert the following information to your user secret file in your server folder.

```bash
      "SpreadSheet_Mudcrab/SpreadSheet_Paddy": {
        "spreadSheetId": "Your SpreadSheet ID",
        "apiKey": "Your Google API Key",
        "appName": "Your Google Cloud Project Name",
        "sheet": "Your Sheet Title"
      }
```

Get your API Key and Project Name by creating the google cloud project as below:

```bash
https://www.youtube.com/watch?v=brCkpzAD0gc
```

Get your SpreadSheet ID and Sheet Title for your google spreadsheets. 


### Command

This project has two folders; client and server. Please follow the following terminal command to run the folders.

1. Client

```bash
ng serve -open
```

2. Server

```bash
dotnet watch
```

## Note

This dashboard is developed for educational purposes and displayed on the local server at IoT Laboratory, CENTEXS for public view and student reference. 
