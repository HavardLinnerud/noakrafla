export const texts = [
  {
    color: "#e55d5d",
    title: "FEED",
    id: "S0",
    description:
      "Status on Control object from FEED. Not adjusted based on FEED-comments or Project development after FEED.",
    textLabel: "S0: Sketch",
    text: "Objects created at S0 should be regarded as preliminary sketches. In practice, it means that several solutions are modeled and then analyzed. Solutions can change in a very short time.",
  },
  {
    color: "#a7c0f7",
    title: "Preliminary towards Civil",
    id: "S1Y",
    description: "Confirmed not-to-exceed area (S1Y)",
    textLabel: "S1: Preliminary",
    text: "At the level of the S1, objects are recognized as concepts that are ready for further design.For example, on the S1 level there may be a designated road corridor (approximate area occupied by the corridor). In theory, it shouldn’t undergo a major change that would affect other industries.Objects are in the correct location, approximate size and shape. Objects have information about the project, their geographic location. They may also have information that will allow them to create price inquiries and cost analysis.",
  },
  {
    color: "#fb974f",
    title: "Preliminary",
    id: "S1",
    description:
      "Control object modelled with simplified shape based on preliminary design from previous stage and estimated information.",
    textLabel: "S1: Preliminary",
    text: "At the level of the S1, objects are recognized as concepts that are ready for further design.For example, on the S1 level there may be a designated road corridor (approximate area occupied by the corridor). In theory, it shouldn’t undergo a major change that would affect other industries.Objects are in the correct location, approximate size and shape. Objects have information about the project, their geographic location. They may also have information that will allow them to create price inquiries and cost analysis.",
  },
  {
    color: "#a7c0f7",
    title: "Released for IDC towards Civil",
    id: "S2Y",
    description:
      "Preliminary cable routing, load, and footprint input to Civil from upstream disciplines",
    textLabel: "S2Y/S3Y:",
    text: "These statuses are intended to be used towards subcontractors, and suggests when we must receive input. These statuses are only to be used on control objects when its relevant. Other parties can put S3Y frozen towards Civil before they reach S3 to communicate to Multiconsult that the control object is frozen towards civil so that multiconsult can design as if it was S3, this is done to save time.&nbsp;",
  },
  {
    color: "#e7e76c",
    title: "Released for verification/IDC",
    id: "S2",
    description: `"Detailed shape with "not to exceed" outer dimensions and location approved by own discipline. If relevant, based on First Supplier Information`,
    textLabel: "S2: Released for verification/IDC",
    text: "At the S2 level, facilities are coordinated within their industry. The objects are so mature that it is possible to carry out interdisciplinary control. Objects are the right size, shape, volume and location.The objects have the information necessary for production.",
  },
  {
    color: "#a7c0f7",
    title: "Frozen towards Civil",
    id: "S3Y",
    description:
      "Frozen cable routing, load and footprint input to Civil Engineering from upstream disciplines",
    textLabel: "S2Y/S3Y:",
    text: "These statuses are intended to be used towards subcontractors, and suggests when we must receive input. These statuses are only to be used on control objects when its relevant. Other parties can put S3Y frozen towards Civil before they reach S3 to communicate to Multiconsult that the control object is frozen towards civil so that multiconsult can design as if it was S3, this is done to save time.&nbsp;",
  },
  {
    color: "#8fc08f",
    title: "Frozen Interface",
    id: "S3",
    description: `Control object completed with final shape and location. Verification/IDC comments implemented. Interfaces towards other control objects and other disciplines frozen. If relevant, based on Frozen Supplier Interface`,
    textLabel: "S3: Frozen Interface",
    text: "Objects to reach level S3 must be correctly coordinated with respect to objects representing other industries. Coordination is an iterative process until all objects reach the S3 level. The objects have their final shape, size, volume and are correctly positioned. The objects have the information necessary for production.",
  },
  {
    color: "#a7c0f7",
    title: "",
    id: "S4H",
    description:
      "S4Hold awaiting third party comments or other authority og Company descissions",
    textLabel: "S4H:Hold",
    text: "When it is necessary to communicate a Hold on a control object. Which control question is missing? and a hold-comment can be attached.",
  },
  {
    color: "#8fc08f",
    title: "Detail Design Completed",
    id: "S4",
    description:
      "Detail design of control object completed and approved for construction.Detailing shall not affect interfaces to other disciplines and control objects.",
    textLabel: "S4: Detail Design Completed",
    text: "Between the S3 and S4 models and objects are analyzed by the customer (contractor) in terms of quality, that is, they have the appropriate geometry and information. After verification on site, in the event of any discrepancies or suggestions for changes, feedback is sent to the relevant discipline departments for re-review. Once all feedback has been approved, the object is ready for production, which means it has an S4. The objects are modeled and detailed with the thought of being made. The objects are supplemented with additional information for a specific product as necessary.",
  },
];
