# vue-web-component-project
This web component contains a button and a calculator component.

## Installation
Open your terminal and go to the root of your project. Add this command in your terminal and run it.
```
npm i @thomkok22/vue-web-component-project
```
Put the scripts inside the ```<head>```
```
<script src="https://unpkg.com/vue"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
<script src="./node_modules/testing-vue-web-components/dist/vue-web-component.js"></script>
```

## Usage
To use the button and calculator. Just add them in an html template.
```
    <button-component></button-component>
    
    <calculator-component></calculator-component>
```

### Button configuration
The button has some configuration. These are the options.

#### Text
To add text to a button. Just add the text attribute.
```
    <button-component text="Hello World!"></button-component>
```
#### Color
To add a color to the button. Add a color attribute.
You can choose grey (standard), blue, green and red.
```
    <button-component color="blue"></button-component>
```
#### Size
To add a different size to a button. Add the size attribute.
You can choose xs (standard), sm, md, lg and xl.
```
    <button-component size="xs"></button-component>
```
#### Border radius
To change the border radius of the button. Add the radius attribute.
You can choose block (standard), round and circle.
```
    <button-component color="blue"></button-component>
```

### Calculator
The calculator has no attributes. Just add the calculator in your html template.
```
    <calculator-component></calculator-component>
```