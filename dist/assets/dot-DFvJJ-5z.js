function t(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    cronjob [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cron Job</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">A cron job that triggers tasks at scheduled<BR/>intervals.</FONT></TD></TR></TABLE>>,
        likec4_id=cronJob,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    system [height=2.5,
        label=<<FONT POINT-SIZE="20">System</FONT>>,
        likec4_id=system,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cronjob -> system [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Start job</FONT></TD></TR></TABLE>>,
        likec4_id="1g81lmg",
        minlen=1,
        style=dashed];
    user [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A user who interacts with the system.</FONT></TD></TR></TABLE>>,
        likec4_id=user,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    user -> system [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Interacts with API</FONT></TD></TR></TABLE>>,
        likec4_id="1pqy4da",
        style=dashed];
    system -> user [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends responses</FONT></TD></TR></TABLE>>,
        likec4_id=ziw9b2,
        style=dashed];
    microsoft [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Microsoft m365 API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Microsoft 365 API for accessing various<BR/>Microsoft services.</FONT></TD></TR></TABLE>>,
        likec4_id=microsoft,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    system -> microsoft [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP requests</FONT></TD></TR></TABLE>>,
        likec4_id=g2y463,
        style=dashed];
    microsoft -> system [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP responses</FONT></TD></TR></TABLE>>,
        likec4_id=heo4bf,
        style=dashed];
}
`;case"system":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=system,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_system {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=system,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_backend {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BACKEND SERVICES</B></FONT>>,
                likec4_depth=1,
                likec4_id="system.backend",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            teams [group=system,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Teams</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Teams service that handles logic related to<BR/>Microsoft Teams interactions.</FONT></TD></TR></TABLE>>,
                likec4_id="system.backend.teams",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            outlook [group=system,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Outlook</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Outlook service that manages email and<BR/>calendar interactions.</FONT></TD></TR></TABLE>>,
                likec4_id="system.backend.outlook",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        graphql [group=system,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Internal GraphQL API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Exposes a GraphQL API for clients to interact<BR/>with the system.</FONT></TD></TR></TABLE>>,
            likec4_id="system.graphql",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        queue [group=system,
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Job Queue</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A queue that holds tasks to be processed by<BR/>the system.</FONT></TD></TR></TABLE>>,
            likec4_id="system.queue",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        database [group=system,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">A database that stores data for the system.</FONT></TD></TR></TABLE>>,
            likec4_id="system.database",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    cronjob [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cron Job</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">A cron job that triggers tasks at scheduled<BR/>intervals.</FONT></TD></TR></TABLE>>,
        likec4_id=cronJob,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cronjob -> graphql [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Start job</FONT></TD></TR></TABLE>>,
        likec4_id="18ttlmv",
        minlen=1,
        style=dashed];
    user [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">A user who interacts with the system.</FONT></TD></TR></TABLE>>,
        likec4_id=user,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    user -> graphql [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Interacts with API</FONT></TD></TR></TABLE>>,
        likec4_id=r1a0bl,
        style=dashed];
    graphql -> user [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Sends responses</FONT></TD></TR></TABLE>>,
        likec4_id=bl71mp,
        style=dashed];
    graphql -> teams [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Calls</FONT></TD></TR></TABLE>>,
        likec4_id="1gn0wn3",
        style=dashed,
        weight=2];
    graphql -> outlook [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Calls</FONT></TD></TR></TABLE>>,
        likec4_id="1qqfuuw",
        style=dashed,
        weight=2];
    microsoft [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Microsoft m365 API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Microsoft 365 API for accessing various<BR/>Microsoft services.</FONT></TD></TR></TABLE>>,
        likec4_id=microsoft,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    queue -> microsoft [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP requests</FONT></TD></TR></TABLE>>,
        likec4_id=y5tmis,
        style=dashed,
        weight=2];
    microsoft -> teams [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP responses</FONT></TD></TR></TABLE>>,
        likec4_id=uo1rgx,
        style=dashed];
    microsoft -> outlook [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP responses</FONT></TD></TR></TABLE>>,
        likec4_id=olq8pi,
        style=dashed];
    teams -> queue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Enqueue tasks</FONT></TD></TR></TABLE>>,
        likec4_id="17rqdbz",
        style=dashed,
        weight=2];
    teams -> database [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Read/write data</FONT></TD></TR></TABLE>>,
        likec4_id=q96iaz,
        minlen=1,
        style=dashed,
        weight=2];
    outlook -> microsoft [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP requests</FONT></TD></TR></TABLE>>,
        likec4_id="1qgtq3a",
        style=dashed];
}
`;case"team":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=team,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_teams {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TEAMS</B></FONT>>,
            likec4_depth=1,
            likec4_id="system.backend.teams",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        drive [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OneDrive</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Microsoft OneDrive service for file storage<BR/>and sharing.</FONT></TD></TR></TABLE>>,
            likec4_id="system.backend.teams.drive",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    graphql [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Internal GraphQL API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Exposes a GraphQL API for clients to interact<BR/>with the system.</FONT></TD></TR></TABLE>>,
        likec4_id="system.graphql",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    graphql -> drive [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Calls</FONT></TD></TR></TABLE>>,
        likec4_id="15n8vy5",
        minlen=1,
        style=dashed];
    queue [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.389,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Job Queue</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">A queue that holds tasks to be processed by<BR/>the system.</FONT></TD></TR></TABLE>>,
        likec4_id="system.queue",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    drive -> queue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Enqueue tasks</FONT></TD></TR></TABLE>>,
        likec4_id=ijhx31,
        minlen=1,
        style=dashed];
}
`;case"microsoft":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=microsoft,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    system [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">System</FONT>>,
        likec4_id=system,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    microsoft [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Microsoft m365 API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Microsoft 365 API for accessing various<BR/>Microsoft services.</FONT></TD></TR></TABLE>>,
        likec4_id=microsoft,
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    system -> microsoft [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP requests</FONT></TD></TR></TABLE>>,
        likec4_id=g2y463,
        minlen=0,
        style=dashed];
    microsoft -> system [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP responses</FONT></TD></TR></TABLE>>,
        likec4_id=heo4bf,
        minlen=0,
        style=dashed];
}
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.4 (0)
 -->
<!-- Pages: 1 -->
<svg width="794pt" height="856pt"
 viewBox="0.00 0.00 794.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- cronjob -->
<g id="node1" class="node">
<title>cronjob</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="542.04,-825.6 222,-825.6 222,-645.6 542.04,-645.6 542.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="341.44" y="-749.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Cron Job</text>
<text xml:space="preserve" text-anchor="start" x="242.36" y="-726.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">A cron job that triggers tasks at scheduled</text>
<text xml:space="preserve" text-anchor="start" x="352.01" y="-708.1" font-family="Arial" font-size="15.00" fill="#c2f0c2">intervals.</text>
</g>
<!-- system -->
<g id="node2" class="node">
<title>system</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="542.04,-502.8 222,-502.8 222,-322.8 542.04,-322.8 542.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="348.68" y="-406.8" font-family="Arial" font-size="20.00" fill="#eff6ff">System</text>
</g>
<!-- user -->
<g id="node3" class="node">
<title>user</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="138.91" y="-95" font-family="Arial" font-size="20.00" fill="#eff6ff">User</text>
<text xml:space="preserve" text-anchor="start" x="36.22" y="-71.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">A user who interacts with the system.</text>
</g>
<!-- microsoft -->
<g id="node4" class="node">
<title>microsoft</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="764.04,-180 444,-180 444,0 764.04,0 764.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="516.77" y="-104" font-family="Arial" font-size="20.00" fill="#eff6ff">Microsoft m365 API</text>
<text xml:space="preserve" text-anchor="start" x="472.3" y="-80.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Microsoft 365 API for accessing various</text>
<text xml:space="preserve" text-anchor="start" x="541.93" y="-62.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Microsoft services.</text>
</g>
<!-- cronjob&#45;&gt;system -->
<g id="edge1" class="edge">
<title>cronjob&#45;&gt;system</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M382.02,-645.67C382.02,-604.47 382.02,-555.36 382.02,-512.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="384.65,-513.16 382.02,-505.66 379.4,-513.16 384.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="382.02,-562.8 382.02,-585.6 440.16,-585.6 440.16,-562.8 382.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="385.02" y="-570" font-family="Arial" font-size="14.00" fill="#c9c9c9">Start job</text>
</g>
<!-- system&#45;&gt;user -->
<g id="edge3" class="edge">
<title>system&#45;&gt;user</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M222.28,-367.5C170.93,-344.88 119.66,-311.48 89.84,-262.8 75.89,-240.02 78.33,-213.98 88.02,-189.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="90.33,-190.45 90.87,-182.52 85.5,-188.38 90.33,-190.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="89.84,-240 89.84,-262.8 204.02,-262.8 204.02,-240 89.84,-240"/>
<text xml:space="preserve" text-anchor="start" x="92.84" y="-247.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Sends responses</text>
</g>
<!-- system&#45;&gt;microsoft -->
<g id="edge4" class="edge">
<title>system&#45;&gt;microsoft</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M425.21,-323.09C439.8,-295.7 456.95,-265.94 474.88,-240 487.04,-222.42 500.94,-204.55 515.02,-187.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="516.75,-189.6 519.56,-182.17 512.73,-186.23 516.75,-189.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="474.88,-240 474.88,-262.8 575.02,-262.8 575.02,-240 474.88,-240"/>
<text xml:space="preserve" text-anchor="start" x="477.88" y="-247.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP requests</text>
</g>
<!-- user&#45;&gt;system -->
<g id="edge2" class="edge">
<title>user&#45;&gt;system</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M198.05,-179.77C211.39,-207.31 227.48,-237.14 245.09,-262.8 257.33,-280.63 271.6,-298.51 286.22,-315.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="284.04,-316.87 290.96,-320.77 287.99,-313.4 284.04,-316.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="245.09,-240 245.09,-262.8 360.02,-262.8 360.02,-240 245.09,-240"/>
<text xml:space="preserve" text-anchor="start" x="248.09" y="-247.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Interacts with API</text>
</g>
<!-- microsoft&#45;&gt;system -->
<g id="edge5" class="edge">
<title>microsoft&#45;&gt;system</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M616.04,-179.87C615.97,-207.86 611.64,-237.93 598.02,-262.8 585.9,-284.94 568.91,-304.47 549.73,-321.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="548.26,-319.29 544.28,-326.16 551.68,-323.27 548.26,-319.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="607.1,-240 607.1,-262.8 718.14,-262.8 718.14,-240 607.1,-240"/>
<text xml:space="preserve" text-anchor="start" x="610.1" y="-247.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP responses</text>
</g>
</g>
</svg>
`;case"system":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.4 (0)
 -->
<!-- Pages: 1 -->
<svg width="1397pt" height="1245pt"
 viewBox="0.00 0.00 1397.00 1245.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1229.85)">
<g id="clust1" class="cluster">
<title>cluster_system</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-944 924,-944 924,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-931.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_backend</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-330.8 48,-612 884,-612 884,-330.8 48,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKEND SERVICES</text>
</g>
<!-- teams -->
<g id="node1" class="node">
<title>teams</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="413.63,-550.8 88.37,-550.8 88.37,-370.8 413.63,-370.8 413.63,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="220.44" y="-474.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Teams</text>
<text xml:space="preserve" text-anchor="start" x="108.43" y="-451.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Teams service that handles logic related to</text>
<text xml:space="preserve" text-anchor="start" x="153.05" y="-433.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Microsoft Teams interactions.</text>
</g>
<!-- outlook -->
<g id="node2" class="node">
<title>outlook</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="844.02,-550.8 523.98,-550.8 523.98,-370.8 844.02,-370.8 844.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="649.54" y="-474.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Outlook</text>
<text xml:space="preserve" text-anchor="start" x="550.18" y="-451.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Outlook service that manages email and</text>
<text xml:space="preserve" text-anchor="start" x="612.71" y="-433.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">calendar interactions.</text>
</g>
<!-- graphql -->
<g id="node3" class="node">
<title>graphql</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="855.38,-882.8 512.62,-882.8 512.62,-702.8 855.38,-702.8 855.38,-882.8"/>
<text xml:space="preserve" text-anchor="start" x="587.84" y="-806.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Internal GraphQL API</text>
<text xml:space="preserve" text-anchor="start" x="532.68" y="-783.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Exposes a GraphQL API for clients to interact</text>
<text xml:space="preserve" text-anchor="start" x="630.23" y="-765.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">with the system.</text>
</g>
<!-- queue -->
<g id="node4" class="node">
<title>queue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="827.61,-224 484.39,-224 484.39,-52 827.61,-52 827.61,-224"/>
<text xml:space="preserve" text-anchor="start" x="607.07" y="-152" font-family="Arial" font-size="20.00" fill="#eff6ff">Job Queue</text>
<text xml:space="preserve" text-anchor="start" x="508.41" y="-128.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">A queue that holds tasks to be processed by</text>
<text xml:space="preserve" text-anchor="start" x="617.65" y="-110.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">the system.</text>
</g>
<!-- database -->
<g id="node5" class="node">
<title>database</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M374.05,-211.64C374.05,-220.67 300.97,-228 211,-228 121.03,-228 47.95,-220.67 47.95,-211.64 47.95,-211.64 47.95,-64.36 47.95,-64.36 47.95,-55.33 121.03,-48 211,-48 300.97,-48 374.05,-55.33 374.05,-64.36 374.05,-64.36 374.05,-211.64 374.05,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M374.05,-211.64C374.05,-202.61 300.97,-195.27 211,-195.27 121.03,-195.27 47.95,-202.61 47.95,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="168.19" y="-143" font-family="Arial" font-size="20.00" fill="#eff6ff">Database</text>
<text xml:space="preserve" text-anchor="start" x="68.01" y="-119.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">A database that stores data for the system.</text>
</g>
<!-- cronjob -->
<g id="node6" class="node">
<title>cronjob</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="844.02,-1214.8 523.98,-1214.8 523.98,-1034.8 844.02,-1034.8 844.02,-1214.8"/>
<text xml:space="preserve" text-anchor="start" x="643.42" y="-1138.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Cron Job</text>
<text xml:space="preserve" text-anchor="start" x="544.34" y="-1115.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">A cron job that triggers tasks at scheduled</text>
<text xml:space="preserve" text-anchor="start" x="653.99" y="-1097.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">intervals.</text>
</g>
<!-- user -->
<g id="node7" class="node">
<title>user</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1284.02,-550.8 963.98,-550.8 963.98,-370.8 1284.02,-370.8 1284.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1102.89" y="-465.8" font-family="Arial" font-size="20.00" fill="#f8fafc">User</text>
<text xml:space="preserve" text-anchor="start" x="1000.2" y="-442.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">A user who interacts with the system.</text>
</g>
<!-- microsoft -->
<g id="node8" class="node">
<title>microsoft</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1367.02,-228 1046.98,-228 1046.98,-48 1367.02,-48 1367.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1119.75" y="-152" font-family="Arial" font-size="20.00" fill="#f8fafc">Microsoft m365 API</text>
<text xml:space="preserve" text-anchor="start" x="1075.28" y="-128.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">Microsoft 365 API for accessing various</text>
<text xml:space="preserve" text-anchor="start" x="1144.91" y="-110.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">Microsoft services.</text>
</g>
<!-- teams&#45;&gt;queue -->
<g id="edge9" class="edge">
<title>teams&#45;&gt;queue</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M363.28,-370.87C418.5,-327.12 484.98,-274.47 540.61,-230.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="542.12,-232.55 546.37,-225.84 538.86,-228.44 542.12,-232.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="465.64,-288 465.64,-310.8 564.26,-310.8 564.26,-288 465.64,-288"/>
<text xml:space="preserve" text-anchor="start" x="468.64" y="-295.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Enqueue tasks</text>
</g>
<!-- teams&#45;&gt;database -->
<g id="edge10" class="edge">
<title>teams&#45;&gt;database</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M239.91,-370.87C234.82,-330.01 228.75,-281.38 223.5,-239.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="226.12,-239.06 222.59,-231.95 220.91,-239.71 226.12,-239.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="232.2,-288 232.2,-310.8 336.25,-310.8 336.25,-288 232.2,-288"/>
<text xml:space="preserve" text-anchor="start" x="235.2" y="-295.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Read/write data</text>
</g>
<!-- outlook&#45;&gt;microsoft -->
<g id="edge11" class="edge">
<title>outlook&#45;&gt;microsoft</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M818.46,-370.94C847.34,-355.27 878.4,-340.79 909,-330.8 985.52,-305.81 1019.95,-352.17 1089,-310.8 1118.39,-293.19 1142.19,-265.09 1160.51,-236.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1162.66,-238.19 1164.41,-230.44 1158.21,-235.41 1162.66,-238.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1115.84,-288 1115.84,-310.8 1215.98,-310.8 1215.98,-288 1115.84,-288"/>
<text xml:space="preserve" text-anchor="start" x="1118.84" y="-295.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP requests</text>
</g>
<!-- graphql&#45;&gt;teams -->
<g id="edge4" class="edge">
<title>graphql&#45;&gt;teams</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M567.39,-702.93C508.06,-657.71 435.91,-602.73 375.5,-556.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="377.4,-554.83 369.85,-552.38 374.22,-559.01 377.4,-554.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="480.48,-620 480.48,-642.8 517.6,-642.8 517.6,-620 480.48,-620"/>
<text xml:space="preserve" text-anchor="start" x="483.48" y="-627.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Calls</text>
</g>
<!-- graphql&#45;&gt;outlook -->
<g id="edge5" class="edge">
<title>graphql&#45;&gt;outlook</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M684,-702.93C684,-659.1 684,-606.08 684,-560.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="686.63,-561.07 684,-553.57 681.38,-561.07 686.63,-561.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="684,-620 684,-642.8 721.12,-642.8 721.12,-620 684,-620"/>
<text xml:space="preserve" text-anchor="start" x="687" y="-627.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Calls</text>
</g>
<!-- graphql&#45;&gt;user -->
<g id="edge3" class="edge">
<title>graphql&#45;&gt;user</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M750.88,-703.16C779.16,-671.89 814.65,-639.66 853.82,-620 876.76,-608.49 887.14,-621.44 911,-612 945.52,-598.35 979.79,-578.02 1010.42,-556.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1011.88,-558.88 1016.49,-552.41 1008.85,-554.6 1011.88,-558.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="853.82,-620 853.82,-642.8 968,-642.8 968,-620 853.82,-620"/>
<text xml:space="preserve" text-anchor="start" x="856.82" y="-627.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Sends responses</text>
</g>
<!-- queue&#45;&gt;microsoft -->
<g id="edge6" class="edge">
<title>queue&#45;&gt;microsoft</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M827.32,-138C894.03,-138 970.29,-138 1036.88,-138"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1036.53,-140.63 1044.03,-138 1036.53,-135.38 1036.53,-140.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="887.23,-141 887.23,-163.8 987.36,-163.8 987.36,-141 887.23,-141"/>
<text xml:space="preserve" text-anchor="start" x="890.23" y="-148.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP requests</text>
</g>
<!-- cronjob&#45;&gt;graphql -->
<g id="edge1" class="edge">
<title>cronjob&#45;&gt;graphql</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M684,-1034.93C684,-991.1 684,-938.08 684,-892.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="686.63,-893.07 684,-885.57 681.38,-893.07 686.63,-893.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="684,-952 684,-974.8 742.14,-974.8 742.14,-952 684,-952"/>
<text xml:space="preserve" text-anchor="start" x="687" y="-959.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Start job</text>
</g>
<!-- user&#45;&gt;graphql -->
<g id="edge2" class="edge">
<title>user&#45;&gt;graphql</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1073.75,-550.6C1052.5,-582.59 1025.57,-617.1 995,-642.8 956.53,-675.15 909.83,-702.31 864.45,-724.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="863.47,-721.76 857.83,-727.35 865.73,-726.5 863.47,-721.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1016.98,-620 1016.98,-642.8 1131.91,-642.8 1131.91,-620 1016.98,-620"/>
<text xml:space="preserve" text-anchor="start" x="1019.98" y="-627.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Interacts with API</text>
</g>
<!-- microsoft&#45;&gt;teams -->
<g id="edge7" class="edge">
<title>microsoft&#45;&gt;teams</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1047.28,-197.07C1015.55,-207.89 982.35,-218.7 951,-228 803.97,-271.63 766.64,-282.02 616,-310.8 551.24,-323.17 531.27,-309.14 469,-330.8 442.92,-339.87 416.52,-352.25 391.52,-365.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="390.34,-363.43 385.03,-369.35 392.87,-368.03 390.34,-363.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="727.01,-288 727.01,-310.8 838.04,-310.8 838.04,-288 727.01,-288"/>
<text xml:space="preserve" text-anchor="start" x="730.01" y="-295.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP responses</text>
</g>
<!-- microsoft&#45;&gt;outlook -->
<g id="edge8" class="edge">
<title>microsoft&#45;&gt;outlook</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1054.94,-227.86C1021.87,-247.48 987.15,-268.29 954.97,-288 914.58,-312.73 871.14,-339.98 831.12,-365.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="829.85,-363.05 824.93,-369.28 832.67,-367.48 829.85,-363.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="954.97,-288 954.97,-310.8 1066,-310.8 1066,-288 954.97,-288"/>
<text xml:space="preserve" text-anchor="start" x="957.97" y="-295.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP responses</text>
</g>
</g>
</svg>
`;case"team":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.4 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="849pt"
 viewBox="0.00 0.00 430.00 849.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 833.86)">
<g id="clust1" class="cluster">
<title>cluster_teams</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.81 8,-548.01 392,-548.01 392,-282.81 8,-282.81"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-535.11" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TEAMS</text>
</g>
<!-- drive -->
<g id="node1" class="node">
<title>drive</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-494.81 39.98,-494.81 39.98,-314.81 360.02,-314.81 360.02,-494.81"/>
<text xml:space="preserve" text-anchor="start" x="157.76" y="-418.81" font-family="Arial" font-size="20.00" fill="#eff6ff">OneDrive</text>
<text xml:space="preserve" text-anchor="start" x="60.37" y="-395.31" font-family="Arial" font-size="15.00" fill="#bfdbfe">Microsoft OneDrive service for file storage</text>
<text xml:space="preserve" text-anchor="start" x="158.72" y="-377.31" font-family="Arial" font-size="15.00" fill="#bfdbfe">and sharing.</text>
</g>
<!-- graphql -->
<g id="node2" class="node">
<title>graphql</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="371.38,-818.81 28.62,-818.81 28.62,-638.81 371.38,-638.81 371.38,-818.81"/>
<text xml:space="preserve" text-anchor="start" x="103.84" y="-742.81" font-family="Arial" font-size="20.00" fill="#f8fafc">Internal GraphQL API</text>
<text xml:space="preserve" text-anchor="start" x="48.68" y="-719.31" font-family="Arial" font-size="15.00" fill="#cbd5e1">Exposes a GraphQL API for clients to interact</text>
<text xml:space="preserve" text-anchor="start" x="146.23" y="-701.31" font-family="Arial" font-size="15.00" fill="#cbd5e1">with the system.</text>
</g>
<!-- queue -->
<g id="node3" class="node">
<title>queue</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="371.61,-172.01 28.39,-172.01 28.39,0 371.61,0 371.61,-172.01"/>
<text xml:space="preserve" text-anchor="start" x="151.07" y="-100" font-family="Arial" font-size="20.00" fill="#f8fafc">Job Queue</text>
<text xml:space="preserve" text-anchor="start" x="52.41" y="-76.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">A queue that holds tasks to be processed by</text>
<text xml:space="preserve" text-anchor="start" x="161.65" y="-58.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">the system.</text>
</g>
<!-- drive&#45;&gt;queue -->
<g id="edge2" class="edge">
<title>drive&#45;&gt;queue</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M200,-315.14C200,-273.71 200,-224.32 200,-182.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="202.63,-182.36 200,-174.86 197.38,-182.36 202.63,-182.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-232.01 200,-254.81 298.62,-254.81 298.62,-232.01 200,-232.01"/>
<text xml:space="preserve" text-anchor="start" x="203" y="-239.21" font-family="Arial" font-size="14.00" fill="#c9c9c9">Enqueue tasks</text>
</g>
<!-- graphql&#45;&gt;drive -->
<g id="edge1" class="edge">
<title>graphql&#45;&gt;drive</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M200,-638.97C200,-597.44 200,-547.83 200,-505.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="202.63,-505.16 200,-497.66 197.38,-505.16 202.63,-505.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-556.01 200,-578.81 237.12,-578.81 237.12,-556.01 200,-556.01"/>
<text xml:space="preserve" text-anchor="start" x="203" y="-563.21" font-family="Arial" font-size="14.00" fill="#c9c9c9">Calls</text>
</g>
</g>
</svg>
`;case"microsoft":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.4 (0)
 -->
<!-- Pages: 1 -->
<svg width="891pt" height="210pt"
 viewBox="0.00 0.00 891.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- system -->
<g id="node1" class="node">
<title>system</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-84" font-family="Arial" font-size="20.00" fill="#f8fafc">System</text>
</g>
<!-- microsoft -->
<g id="node2" class="node">
<title>microsoft</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="861.04,-180 541,-180 541,0 861.04,0 861.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="613.77" y="-104" font-family="Arial" font-size="20.00" fill="#eff6ff">Microsoft m365 API</text>
<text xml:space="preserve" text-anchor="start" x="569.3" y="-80.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Microsoft 365 API for accessing various</text>
<text xml:space="preserve" text-anchor="start" x="638.93" y="-62.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Microsoft services.</text>
</g>
<!-- system&#45;&gt;microsoft -->
<g id="edge1" class="edge">
<title>system&#45;&gt;microsoft</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.95,-69.06C340.28,-67.06 360.83,-65.34 380.45,-64.2 429.37,-61.35 482.42,-63.48 531.02,-67.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="530.61,-70.12 538.3,-68.15 531.06,-64.89 530.61,-70.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="380.45,-64.2 380.45,-87 480.59,-87 480.59,-64.2 380.45,-64.2"/>
<text xml:space="preserve" text-anchor="start" x="383.45" y="-71.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP requests</text>
</g>
<!-- microsoft&#45;&gt;system -->
<g id="edge2" class="edge">
<title>microsoft&#45;&gt;system</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M541.1,-90C474.69,-90 397.53,-90 330.08,-90"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.3,-87.38 322.8,-90 330.3,-92.63 330.3,-87.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="375,-93 375,-115.8 486.04,-115.8 486.04,-93 375,-93"/>
<text xml:space="preserve" text-anchor="start" x="378" y="-100.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP responses</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
