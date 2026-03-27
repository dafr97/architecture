function e(r){switch(r){case"index":return`@startuml\r
title "Landscape view"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<CronJob>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam person<<User>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<System>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Microsoft>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
rectangle "==Cron Job\\n\\nA cron job that triggers tasks at scheduled intervals." <<CronJob>> as CronJob\r
person "==User\\n\\nA user who interacts with the system." <<User>> as User\r
rectangle "==System" <<System>> as System\r
rectangle "==Microsoft m365 API\\n\\nMicrosoft 365 API for accessing various Microsoft services." <<Microsoft>> as Microsoft\r
\r
CronJob .[#8D8D8D,thickness=2].> System : "<color:#8D8D8D>Start job<color:#8D8D8D>"\r
User .[#8D8D8D,thickness=2].> System : "<color:#8D8D8D>Interacts with API<color:#8D8D8D>"\r
System .[#8D8D8D,thickness=2].> User : "<color:#8D8D8D>Sends responses<color:#8D8D8D>"\r
System .[#8D8D8D,thickness=2].> Microsoft : "<color:#8D8D8D>HTTP requests<color:#8D8D8D>"\r
Microsoft .[#8D8D8D,thickness=2].> System : "<color:#8D8D8D>HTTP responses<color:#8D8D8D>"\r
@enduml\r
`;case"system":return`@startuml\r
title "System"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<CronJob>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam person<<User>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<SystemGraphql>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam queue<<SystemQueue>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Microsoft>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<SystemBackendTeams>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<SystemBackendOutlook>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<SystemDatabase>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
rectangle "==Cron Job\\n\\nA cron job that triggers tasks at scheduled intervals." <<CronJob>> as CronJob\r
person "==User\\n\\nA user who interacts with the system." <<User>> as User\r
rectangle "System" <<System>> as System {\r
  skinparam RectangleBorderColor<<System>> #3b82f6\r
  skinparam RectangleFontColor<<System>> #3b82f6\r
  skinparam RectangleBorderStyle<<System>> dashed\r
\r
  rectangle "==Internal GraphQL API\\n\\nExposes a GraphQL API for clients to interact with the system." <<SystemGraphql>> as SystemGraphql\r
  queue "==Job Queue\\n\\nA queue that holds tasks to be processed by the system." <<SystemQueue>> as SystemQueue\r
  rectangle "Backend Services" <<SystemBackend>> as SystemBackend {\r
    skinparam RectangleBorderColor<<SystemBackend>> #3b82f6\r
    skinparam RectangleFontColor<<SystemBackend>> #3b82f6\r
    skinparam RectangleBorderStyle<<SystemBackend>> dashed\r
\r
    rectangle "==Teams\\n\\nTeams service that handles logic related to Microsoft Teams interactions." <<SystemBackendTeams>> as SystemBackendTeams\r
    rectangle "==Outlook\\n\\nOutlook service that manages email and calendar interactions." <<SystemBackendOutlook>> as SystemBackendOutlook\r
  }\r
  database "==Database\\n\\nA database that stores data for the system." <<SystemDatabase>> as SystemDatabase\r
}\r
rectangle "==Microsoft m365 API\\n\\nMicrosoft 365 API for accessing various Microsoft services." <<Microsoft>> as Microsoft\r
\r
CronJob .[#8D8D8D,thickness=2].> SystemGraphql : "<color:#8D8D8D>Start job<color:#8D8D8D>"\r
User .[#8D8D8D,thickness=2].> SystemGraphql : "<color:#8D8D8D>Interacts with API<color:#8D8D8D>"\r
SystemGraphql .[#8D8D8D,thickness=2].> User : "<color:#8D8D8D>Sends responses<color:#8D8D8D>"\r
SystemQueue .[#8D8D8D,thickness=2].> Microsoft : "<color:#8D8D8D>HTTP requests<color:#8D8D8D>"\r
SystemGraphql .[#8D8D8D,thickness=2].> SystemBackendTeams : "<color:#8D8D8D>Calls<color:#8D8D8D>"\r
SystemGraphql .[#8D8D8D,thickness=2].> SystemBackendOutlook : "<color:#8D8D8D>Calls<color:#8D8D8D>"\r
Microsoft .[#8D8D8D,thickness=2].> SystemBackendTeams : "<color:#8D8D8D>HTTP responses<color:#8D8D8D>"\r
Microsoft .[#8D8D8D,thickness=2].> SystemBackendOutlook : "<color:#8D8D8D>HTTP responses<color:#8D8D8D>"\r
SystemBackendTeams .[#8D8D8D,thickness=2].> SystemDatabase : "<color:#8D8D8D>Read/write data<color:#8D8D8D>"\r
SystemBackendTeams .[#8D8D8D,thickness=2].> SystemQueue : "<color:#8D8D8D>Enqueue tasks<color:#8D8D8D>"\r
SystemBackendOutlook .[#8D8D8D,thickness=2].> Microsoft : "<color:#8D8D8D>HTTP requests<color:#8D8D8D>"\r
@enduml\r
`;case"team":return`@startuml\r
title "Teams"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<SystemGraphql>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<SystemBackendTeamsDrive>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam queue<<SystemQueue>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
rectangle "==Internal GraphQL API\\n\\nExposes a GraphQL API for clients to interact with the system." <<SystemGraphql>> as SystemGraphql\r
rectangle "Teams" <<SystemBackendTeams>> as SystemBackendTeams {\r
  skinparam RectangleBorderColor<<SystemBackendTeams>> #3b82f6\r
  skinparam RectangleFontColor<<SystemBackendTeams>> #3b82f6\r
  skinparam RectangleBorderStyle<<SystemBackendTeams>> dashed\r
\r
  rectangle "==OneDrive\\n\\nMicrosoft OneDrive service for file storage and sharing." <<SystemBackendTeamsDrive>> as SystemBackendTeamsDrive\r
}\r
queue "==Job Queue\\n\\nA queue that holds tasks to be processed by the system." <<SystemQueue>> as SystemQueue\r
\r
SystemGraphql .[#8D8D8D,thickness=2].> SystemBackendTeamsDrive : "<color:#8D8D8D>Calls<color:#8D8D8D>"\r
SystemBackendTeamsDrive .[#8D8D8D,thickness=2].> SystemQueue : "<color:#8D8D8D>Enqueue tasks<color:#8D8D8D>"\r
@enduml\r
`;case"microsoft":return`@startuml\r
title "Microsoft m365 API"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam rectangle<<System>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<Microsoft>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
rectangle "==System" <<System>> as System\r
rectangle "==Microsoft m365 API\\n\\nMicrosoft 365 API for accessing various Microsoft services." <<Microsoft>> as Microsoft\r
\r
System .[#8D8D8D,thickness=2].> Microsoft : "<color:#8D8D8D>HTTP requests<color:#8D8D8D>"\r
Microsoft .[#8D8D8D,thickness=2].> System : "<color:#8D8D8D>HTTP responses<color:#8D8D8D>"\r
@enduml\r
`;default:throw new Error("Unknown viewId: "+r)}}export{e as pumlSource};
