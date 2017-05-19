/**
 * render.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
import { renderToString } from 'react-dom/server';
import React from 'react';
export default (renderMe, gists,players='') => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Universal React Router 4 Demo</title>
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        <style>
            body {
                font-family: Helvetica Neue, Arial, sans-serif;
                margin: 0;
            }
            html { box-sizing: border-box; }
            *, *:before, *:after { box-sizing: inherit; }
        </style>
    </head>
    <body>
        <div id="app">${renderToString(renderMe)}</div>
        ${gists ? `
            <script>window.__gists__ = ${JSON.stringify(gists)};</script>
            <script>window.__players__ = ${JSON.stringify(players)};</script>
            <script src="/static/client.min.js"></script>
        ` : ''}
    </body>
</html>`;
