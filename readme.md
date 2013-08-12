# Scoreboard

Scoreboard is a simple Node.js app that renders a local scoreboard for a game such as Ping Pong. It contains an auto-updating scoreboard page and an admin page where scores can be adjusted and player names can be set.

---

## About

This was intended primarily as a 'Let's build something simple in Node app'. Some friends thought it would be cool to have a scoreboard for their Ping Pong games and I threw this together.

Note that this is a very simple app and doesn't use a database. This makes running it much simpler but also means that it has limtied functionality.

Scoreboard makes use of Express, Jade, and Bootstrap.

---

## Security

This is designed to be run locally. There are no protections on the admin page, it would be easy for someone to come along and start spoofing requests and mess up the board. If anyone actually wants something that can be used in a production environment, open a ticket and I'll look into it.

---

## Design

The current HTML rendering is pretty basic. Open a ticket or fork and send a pull request if you'd like to improve the CSS.

--

## License

Copyright 2013 John Heenan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.