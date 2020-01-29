# FEUP-SINF

Project developed for Information Systems class.

Made in colaboration with [Gonçalo Santos](https://github.com/gregueiras), [Rita Norinho](https://github.com/ritanorinho), [Afonso Azevedo](https://github.com/4-Z3r0) and [Joana Silva](https://github.com/jmcsilva98).

## Specification

This project consists in the development of a customizable interface to handle all the transactions between two different companies. It is important to clearly show past or ongoing processes between the two companies, so that the flow between them is noticeable. 
The interface should host and display detailed data about all operational aspects of the transaction, such as stock, product categories, and vending platforms. 
Another fundamental feature of the project is providing a user-friendly experience that allows the user a better understanding of the sales-purchase flow.

### Install

`cd backend`
`cp .env.example .env`
`adonis key:generate`

### Run

Just run `docker-compose up` in the root of the project and all 5 containers should build and start.

Backend: http://0.0.0.0/3335
Frontend: http://0.0.0.0/3001
Redis DB: http://0.0.0.0/6379
Postgres DB: http://0.0.0.0/5433
PG admin: http://0.0.0.0/5051

### Core Views

#### Overview

![](https://github.com/susanalima/FEUP-SINF/blob/master/core-views/screen%20captures/screencapture-localhost-3001-2019-12-19-08_41_26.png)

#### Master Data

![](https://github.com/susanalima/FEUP-SINF/blob/master/core-views/screen%20captures/screencapture-localhost-3001-master-data-2019-12-19-08_44_41.png)

#### Logs

![](https://github.com/susanalima/FEUP-SINF/blob/master/core-views/screen%20captures/screencapture-localhost-3001-logs-2019-12-19-08_46_03.png)

#### Settings

![](https://github.com/susanalima/FEUP-SINF/blob/master/core-views/screen%20captures/screencapture-localhost-3001-settings-2019-12-19-08_46_53.png)

#### New Process

![](https://github.com/susanalima/FEUP-SINF/blob/master/core-views/screen%20captures/screencapture-localhost-3001-new-process-2019-12-19-08_48_36.png)

#### Process Detail

![](https://github.com/susanalima/FEUP-SINF/blob/master/core-views/screen%20captures/screencapture-localhost-3001-view-process-3-2019-12-19-08_49_47.png)

#### New Process Type

![](https://github.com/susanalima/FEUP-SINF/blob/master/core-views/screen%20captures/screencapture-localhost-3001-create-process-type-2019-12-19-08_52_10.png)
