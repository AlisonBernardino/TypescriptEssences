let anyTopic: any;
anyTopic = false;
anyTopic = 'Sample string';
anyTopic = 25;

let testItem: string = 'Checked item';
testItem = anyTopic;

let unknownValueVariable: unknown;
unknownValueVariable = 10;
unknownValueVariable = 'Random string';
unknownValueVariable = 'Unknown item';

let sampleStringB: string = 'Sample string value B';
sampleStringB = unknownValueVariable;

if (typeof unknownValueVariable === 'string') {
  sampleStringB = unknownValueVariable;
}
