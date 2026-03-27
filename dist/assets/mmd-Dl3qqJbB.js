function r(e){switch(e){case"index":return`---\r
title: "Landscape view"\r
---\r
graph TB\r
  CronJob[Cron Job]\r
  User[fa:fa-user User]\r
  System[System]\r
  Microsoft[Microsoft m365 API]\r
  CronJob -. "Start job" .-> System\r
  User -. "Interacts with API" .-> System\r
  System -. "Sends responses" .-> User\r
  System -. "HTTP requests" .-> Microsoft\r
  Microsoft -. "HTTP responses" .-> System\r
`;case"system":return`---\r
title: "System"\r
---\r
graph TB\r
  CronJob[Cron Job]\r
  User[fa:fa-user User]\r
  subgraph System["System"]\r
    System.Graphql[Internal GraphQL API]\r
    System.Queue[(Job Queue)]\r
    subgraph System.Backend["Backend Services"]\r
      System.Backend.Teams[Teams]\r
      System.Backend.Outlook[Outlook]\r
    end\r
    System.Database([Database])\r
  end\r
  Microsoft[Microsoft m365 API]\r
  CronJob -. "Start job" .-> System.Graphql\r
  User -. "Interacts with API" .-> System.Graphql\r
  System.Graphql -. "Sends responses" .-> User\r
  System.Queue -. "HTTP requests" .-> Microsoft\r
  System.Graphql -. "Calls" .-> System.Backend.Teams\r
  System.Graphql -. "Calls" .-> System.Backend.Outlook\r
  Microsoft -. "HTTP responses" .-> System.Backend.Teams\r
  Microsoft -. "HTTP responses" .-> System.Backend.Outlook\r
  System.Backend.Teams -. "Read/write data" .-> System.Database\r
  System.Backend.Teams -. "Enqueue tasks" .-> System.Queue\r
  System.Backend.Outlook -. "HTTP requests" .-> Microsoft\r
`;case"team":return`---\r
title: "Teams"\r
---\r
graph TB\r
  SystemGraphql[Internal GraphQL API]\r
  subgraph SystemBackendTeams["Teams"]\r
    SystemBackendTeams.Drive[OneDrive]\r
  end\r
  SystemQueue[(Job Queue)]\r
  SystemGraphql -. "Calls" .-> SystemBackendTeams.Drive\r
  SystemBackendTeams.Drive -. "Enqueue tasks" .-> SystemQueue\r
`;case"microsoft":return`---\r
title: "Microsoft m365 API"\r
---\r
graph TB\r
  System[System]\r
  Microsoft[Microsoft m365 API]\r
  System -. "HTTP requests" .-> Microsoft\r
  Microsoft -. "HTTP responses" .-> System\r
`;default:throw new Error("Unknown viewId: "+e)}}export{r as mmdSource};
