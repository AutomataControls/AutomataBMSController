# Automata BMS Controller for Node-RED

The Automata Building Management System (BMS) Controller provides a sophisticated interface for managing complex HVAC systems through Node-RED Dashboard 2.0. This professional-grade control system offers comprehensive monitoring and management capabilities for building automation systems.

![Automata BMS Controller Interface](https://raw.githubusercontent.com/AutomataControls/AutomataBMSController/main/nodes/icons/controller.png)

## System Overview

The Automata BMS Controller delivers enterprise-grade building management capabilities through an intuitive interface. The system provides extensive monitoring and control capabilities for critical HVAC infrastructure, including temperature monitoring for chilled water and hot water systems, real-time differential pressure monitoring, and comprehensive equipment control functionality.

The interface enables direct control of chillers, boilers, and associated pump systems while providing immediate visual feedback through an advanced status monitoring system. Real-time alarm management ensures operators can quickly identify and respond to system issues, maintaining optimal building performance.

## Installation

The controller can be installed through npm:

```bash
npm install @automatacontrols/bms-controller
```

## System Integration

The controller accepts input messages in the following format:

```javascript
{
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
```

## System Requirements

The BMS Controller requires:
- Node-RED version 3.0.0 or higher
- Node-RED Dashboard 2.0
- Modern web browser with ES6 support

## Configuration Options

The system provides comprehensive configuration options through the Node-RED editor interface, including:
- Custom naming conventions for equipment and systems
- Dashboard group assignment for organizational clarity
- Widget size customization for optimal display
- Theme selection for visual consistency

## Technical Support

Support resources are available through:
- Issue Tracking: [AutomataBMSController Issues](https://github.com/AutomataControls/AutomataBMSController/issues)
- Source Repository: [AutomataBMSController](https://github.com/AutomataControls/AutomataBMSController)

## License Information

This software is provided under the MIT License. Complete license details can be found in the LICENSE file included with this package.

## Developer Information

Developed by AutomataControls
GitHub: [AutomataControls](https://github.com/AutomataControls)

## Version History

### Version 1.0.0
- Initial system release with comprehensive BMS functionality
- Advanced HVAC control interface
- Real-time monitoring capabilities
- Equipment status visualization
- Integrated alarm management
- Interactive temperature control
- Complete pump and equipment management