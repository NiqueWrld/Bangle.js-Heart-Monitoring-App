# Bangle.js Heart Monitoring App

## Overview

This repository contains the source code for a web application that interacts with a Bangle.js device to monitor and display heart rate data in real-time. The Bangle.js device captures heart rate data using its built-in sensors and sends this data via Bluetooth to the web application. The web application then displays the heart rate data on a graph in real-time, providing users with a visual representation of their heart rate over a period.

## Features

- **Real-time Data Display:** Receive heart rate data from Bangle.js and display it on the web interface in real-time.
- **Graphical Representation:** Visualize heart rate data using charts to provide users with an intuitive understanding of their heart rate patterns.
- **Bluetooth Integration:** Establish a Bluetooth connection between Bangle.js and the web application to facilitate data transmission.

## Setup Instructions

### Prerequisites

- Bangle.js device with heart rate monitoring functionality.
- Web browser (Chrome, Firefox, etc.) that supports Web Bluetooth API.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NiqueWrld/Bangle.js-Heart-Monitoring-App.git
   cd banglejs-heart-monitor
   ```

2. Upload Heart.js on bangle.js:

   ```bash
   use https://www.espruino.com/ide/
   ```

### Usage

1. Ensure your Bangle.js device is powered on and has heart rate monitoring enabled.
2. Open the web application in a supported browser.
3. Pair the Bangle.js device using Bluetooth.
4. Once paired, heart rate data will start displaying on the graph in real-time.

## Contributing

Contributions to improve and extend the functionality of this project are welcome. Please fork the repository and submit pull requests to contribute.
