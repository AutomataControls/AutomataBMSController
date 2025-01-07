<div align="center">

# 🏢 Automata BMS Controller for Node-RED

[![License](https://img.shields.io/npm/l/@automatacontrols/building-systems-controller)](https://github.com/AutomataControls/AutomataBMSController/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@automatacontrols/building-systems-controller)](https://www.npmjs.com/package/@automatacontrols/building-systems-controller)
[![Downloads](https://img.shields.io/npm/dm/@automatacontrols/building-systems-controller)](https://www.npmjs.com/package/@automatacontrols/building-systems-controller)
[![GitHub Stars](https://img.shields.io/github/stars/AutomataControls/AutomataBMSController)](https://github.com/AutomataControls/AutomataBMSController/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/AutomataControls/AutomataBMSController)](https://github.com/AutomataControls/AutomataBMSController/issues)
[![Node-RED](https://img.shields.io/badge/Node--RED-Dashboard%202.0-red)](https://flows.nodered.org/node/@automatacontrols/building-systems-controller)
[![Platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![BMS](https://img.shields.io/badge/BMS-Control-brightgreen)](https://github.com/AutomataControls/AutomataBMSController)

</div>

---

## 📋 Overview

The Automata Building Management System (BMS) Controller provides a sophisticated interface for managing complex HVAC systems through Node-RED Dashboard 2.0. This professional-grade control system offers comprehensive monitoring and management capabilities for building automation systems, delivering enterprise-grade functionality through an intuitive and responsive interface.

<div align="center">

![Automata BMS Controller Interface](https://raw.githubusercontent.com/AutomataControls/AutomataBMSController/main/nodes/icons/controller.png)

</div>

---

## 🏗️ System Architecture

### Core Features
- 🎛️ Direct control of chillers, boilers, and pump systems
- 📊 Real-time differential pressure monitoring
- 🌡️ Comprehensive temperature monitoring
- ⚡ Advanced status visualization system
- 🚨 Real-time alarm management
- 🔄 Immediate visual feedback
- 🎨 Customizable interface themes

### Equipment Control
- ❄️ Chiller system management
- 🔥 Boiler operation control
- 💧 Pump system coordination
- 🌡️ Temperature setpoint management
- 📊 Pressure differential monitoring
- 🔔 Alarm system integration

---

## 🚀 Installation

```bash
npm install @automatacontrols/building-systems-controller

🔌 System Integration
The controller accepts input messages in the following format:
javascriptCopy{
    "payload": {
        "cwSupply": 45.00,       // Chilled water supply temperature
        "cwReturn": 48.00,       // Chilled water return temperature
        "hwSupply": 180.00,      // Hot water supply temperature
        "hwReturn": 160.00,      // Hot water return temperature
        "cwSetpoint": 45.00,     // Chilled water setpoint
        "hwSetpoint": 180.00,    // Hot water setpoint
        "outdoorTemp": 68.00,    // Outdoor temperature
        "hwDiffPressure": 12.00, // Hot water differential pressure
        "cwDiffPressure": 15.00, // Chilled water differential pressure
        "equipment": {
            "chiller1": true,    // Equipment enable states
            "boiler1": true
        },
        "alarms": {
            "cw": true,          // System alarm states
            "hw": true
        }
    }
}
💻 System Requirements

🔧 Node-RED version 3.0.0 or higher
📊 Node-RED Dashboard 2.0
🌐 Modern web browser with ES6 support

⚙️ Configuration Options

📝 Custom naming conventions for equipment and systems
📊 Dashboard group assignment for organizational clarity
📐 Widget size customization for optimal display
🎨 Theme selection for visual consistency

🤝 Technical Support

🐛 Issue Tracking
📦 Source Repository

📄 License Information
This software is provided under the MIT License. Complete license details can be found in the LICENSE file included with this package.
👨‍💻 Developer Information
Developed by AutomataControls

🌐 GitHub: AutomataControls

📝 Version History
1.0.0

🎉 Initial system release
🏢 Comprehensive BMS functionality
🎛️ Advanced HVAC control interface
📊 Real-time monitoring capabilities
🖥️ Equipment status visualization
🚨 Integrated alarm management
🌡️ Interactive temperature control
💧 Complete pump and equipment management

1.0.1

🔧 Updated node-red-dashboard dependency to 2.0.0
📝 Enhanced documentation

1.0.2

🎨 Updated node color to brand pink (#F0056B)
📚 Added comprehensive documentation
➕ Added status badges


<div align="center">
node-red dashboard bms hvac building-automation controls chiller boiler pump-control equipment-monitoring ui widget automata building-management automation monitoring
</div>
```