function e(r){switch(r){case"index":return`direction: down\r
\r
CronJob: {\r
  label: "Cron Job"\r
}\r
User: {\r
  label: "User"\r
  shape: person\r
}\r
System: {\r
  label: "System"\r
}\r
Microsoft: {\r
  label: "Microsoft m365 API"\r
}\r
\r
CronJob -> System: "Start job"\r
User -> System: "Interacts with API"\r
System -> User: "Sends responses"\r
System -> Microsoft: "HTTP requests"\r
Microsoft -> System: "HTTP responses"\r
`;case"system":return`direction: down\r
\r
CronJob: {\r
  label: "Cron Job"\r
}\r
User: {\r
  label: "User"\r
  shape: person\r
}\r
System: {\r
  label: "System"\r
\r
  Graphql: {\r
    label: "Internal GraphQL API"\r
  }\r
  Queue: {\r
    label: "Job Queue"\r
    shape: queue\r
  }\r
  Backend: {\r
    label: "Backend Services"\r
\r
    Teams: {\r
      label: "Teams"\r
    }\r
    Outlook: {\r
      label: "Outlook"\r
    }\r
  }\r
  Database: {\r
    label: "Database"\r
    shape: stored_data\r
  }\r
}\r
Microsoft: {\r
  label: "Microsoft m365 API"\r
}\r
\r
CronJob -> System.Graphql: "Start job"\r
User -> System.Graphql: "Interacts with API"\r
System.Graphql -> User: "Sends responses"\r
System.Queue -> Microsoft: "HTTP requests"\r
System.Graphql -> System.Backend.Teams: "Calls"\r
System.Graphql -> System.Backend.Outlook: "Calls"\r
Microsoft -> System.Backend.Teams: "HTTP responses"\r
Microsoft -> System.Backend.Outlook: "HTTP responses"\r
System.Backend.Teams -> System.Database: "Read/write data"\r
System.Backend.Teams -> System.Queue: "Enqueue tasks"\r
System.Backend.Outlook -> Microsoft: "HTTP requests"\r
`;case"team":return`direction: down\r
\r
SystemGraphql: {\r
  label: "Internal GraphQL API"\r
}\r
SystemBackendTeams: {\r
  label: "Teams"\r
\r
  Drive: {\r
    label: "OneDrive"\r
  }\r
}\r
SystemQueue: {\r
  label: "Job Queue"\r
  shape: queue\r
}\r
\r
SystemGraphql -> SystemBackendTeams.Drive: "Calls"\r
SystemBackendTeams.Drive -> SystemQueue: "Enqueue tasks"\r
`;case"microsoft":return`direction: down\r
\r
System: {\r
  label: "System"\r
}\r
Microsoft: {\r
  label: "Microsoft m365 API"\r
}\r
\r
System -> Microsoft: "HTTP requests"\r
Microsoft -> System: "HTTP responses"\r
`;default:throw new Error("Unknown viewId: "+r)}}export{e as d2Source};
