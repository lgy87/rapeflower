```js
<>
  <Step>
    <StepItem>step 1</StepItem>
    <StepItem active>step 2</StepItem>
    <StepItem>step 3</StepItem>
    <StepItem tooltip="step 4's tooltip">step 4</StepItem>
  </Step>
</>
```
```js
<>
  <Step
    steps={[
      {tooltip: "i love u", text: "step 1"},
      {active: true, tooltip: "i love u", text: "step 2"},
      {tooltip: false, text: "step 3"},
      {tooltip: "i love u", text: "step 4"},
    ]}
  />
</>
```