# vue-web-component-project
This web component contains a button and a calculator component.

## Installation
Open your terminal and go to the root of your project. Add this command in your terminal and run it.
```
npm i @thomkok22/vue-web-component-project
```
Make a html page and add these scripts inside the ```<head>```
```
<script src="https://unpkg.com/vue"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
<script src="./node_modules/vue-web-component-project/dist/web-components.js"></script>
```

## Usage
To use the button and the calculator. Just add them in an html template.
```
<button-component></button-component>

<calculator-component></calculator-component>
```

### Button configuration
The button has some configurations. These are the options.

#### Text
To add text to a button. Just add text inside the button-component.
```
<button-component>Hello World!</button-component>
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

### Click event
To add a click event. Just use it like you always do in html.
```
<button-component onclick="hello"></button-component>
```

Put a script inside your html and simply add the javascript code.
```
    function hello() {
        console.log('Hello world!');
    }
```

You can also add your own styles with the class attribute.
```
<button-component id="myId" class="myClass"></button-component>
```

Styling the button-component is a bit different. To add a style to all button-components add this format in the style.

```
    button-component::part(button) {
        background-color: red;
    }
```

You can also change the style to a button-component with the correct id or class.
```
    #myId::part(button) {
        background-color: red;
    }
    
    .myClass::part(button) {
        background-color: red;
    }
```

### Calculator
The calculator has no attributes. Just add the calculator in your html template.
```
<calculator-component></calculator-component>
```