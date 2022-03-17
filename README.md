# booble-board
Winxie's open source productivity tool built in react.

Booble is an open source tool for productivity management.

You can create one of a series of starting points for your files.

## Document Types
- [x] Boards, a freeform grid used to store Items anywhere specified.
- [ ] Docs, a pdf style document used to store Items similarly to a text file
- [ ] Trees, a hierarchy type organization document where items flow down one another.

## Universal Items

## Built In Items
- [X] Notes, a form of sticky notes that contain a title and description.
- [ ] Pins, a circular component that is used as a descriptor for certain Items.

### Freeform Items
- [ ] Freeform text, raw text that can be manipulated with font, color, bold, etc.

### Command Items
- [ ] Command Nodes, used to create commands with a 
- [ ] Command Wires, used to direct the flow of command nodes
- [ ] Command Bursts, command nodes that target all nodes within the document
- [ ] Command Sensors, used to sense certain metadata within the doc to inspect changes
- [ ] Command Hooks, used to access external data from APIs to gather data for the doc.

## Properties

### Universal Properties

| Property | Description |
| ----------- | ----------- |
| position | A vector with properties of x, y. |
| type | Defines the type of Item that is in use. |