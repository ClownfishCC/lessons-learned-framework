# LESSONS-LEARNED-FRAMEWORK

A web application for storing and searching your lessons learned. See [l3crisis.eu](https://l3crisis.eu) for the live version.

![landing page](img/ss0_landing.png)

## Installation

Install all dependencies, start the database service and run parcel to bundle your dependencies. You can access the application at [http://localhost:3000](http://localhost:3000).

```bash
npm i
npm build:domain
npm run serve
```

## Development

As above, but now run `parcel` in watch mode.

```bash
npm i
npm start
```

### Environment settings

- LOKI_PORT: to change the output port, default 3000, e.g. `set LOKI_PORT=80` to serve it at [http://localhost](http://localhost).
- NODE_DEV: When set to `development`, every server request is logged to the command line. Set it to `production` to stop logging requests.

## Screenshots

![events](img/ss1_events.png)
![event_view](img/ss2_event_view.png)
![general](img/ss3_general.png)
![incident](img/ss4_incident.png)
![geo](img/ss5_geo.png)
![org](img/ss6_org.png)
![cm](img/ss7_cm.png)
![lesson](img/ss8_lesson.png)
![pubs](img/ss9_pubs.png)
![mm](img/ss10_mm.png)
![editors](img/ss11_editors.png)

## TODO

- FIX: Edit rights on kcr2 website
- Add the option to upload reports
- Add the option to upload one image of the incident (for the infographic)
- Make a separate app for the infographics view (with a link to the L3)
- FIX: The non-edit view, since there are new types available. Also update the way lessons are shown.
- Implement traffic light + smiley for the lessons
- Show default image and/or infographic for each CM incident type
- Implement the 9 CM themes and n incident categories (Rijksbrede risico analyse, p85)

## Keycloak

- http://localhost:8765/realms/l3/account/#/