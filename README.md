# vue-web-component-project
This web component contains a button and a calculator component.

## Installation
Open your terminal and go to the root of your project. Add this command in your terminal and run it.
```
npm i @thomkok22/vue-web-component-project
```
Make a html page and add these scripts inside the ```<head>```
```
<script src="https://unpkg.com/vue@2.6.10/dist/vue.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
<script src="./node_modules/vue-web-component-project/dist/component.js"></script>
```

## Usage
To use the button and the calculator. Just add them in an html template.
```
<component-calculator></component-calculator>

<component-button></component-button>
```

### Button configuration
The button has some configurations. These are the options.

#### Text
To add text to a button. Just add text inside the component-button.
```
<component-button>Hello World!</component-button>
```
#### Color
To add a color to the button. Add a color attribute.
You can choose grey (standard), blue, green and red.
```
<component-button color="blue"></component-button>
```
#### Size
To add a different size to a button. Add the size attribute.
You can choose xs (standard), sm, md, lg and xl.
```
<component-button size="xs"></component-button>
```
#### Border radius
To change the border radius of the button. Add the radius attribute.
You can choose block (standard), round and circle.
```
<component-button color="blue"></component-button>
```

### Click event
To add a click event. Just use it like you always do in html.
```
<component-button onclick="hello"></component-button>
```

Put a script inside your html and simply add the javascript code.
```
    function hello() {
        console.log('Hello world!');
    }
```

You can also add your own styles with the class attribute.
```
<component-button id="myId" class="myClass"></component-button>
```

Styling the component-button is a bit different. To add a style to all component-buttons, add this format in the style.

```
    component-button::part(button) {
        background-color: red;
    }
```

You can also change the style to a component-button with the correct id or class.
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
<component-calculator></component-calculator>
```