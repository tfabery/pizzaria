# _Order Pizza_

#### By _**Tony Fabery**_

## Description

_This webpage let's a user create a pizza that the user wants and lets the user know how much the pizza would cost._

## Specs
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| 'Create My Pizza' button leads user to pizza creator form  | click 'Create My Pizza' | Pizza creator form is shown |
| Pizza object can be created  | myPizza = new Pizza() | Pizza {'', '', '', []} |
| Selected pizza size gets saved into pizza object  | Select 'Large' | Pizza {'lg', 'thin', '', []} |
| Selected pizza thickness gets saved into pizza object  | Select 'Thin' | Pizza {'lg', 'thin', '', []} |
| Selected sauce gets saved into pizza object | Select 'original' | Pizza {'lg', 'thin', 'og', []} |
| Selected topping gets saved into pizza object |Select 'pepperoni' | Pizza {'lg', 'thin', 'og', ['pepperoni']} |
| 'Add more topping' button adds additional topping select box | Click 'Add more topping' | One more topping select box appears |
| Additional selected topping gets pushed into pizza's topping array  | Select 'Sausage' | Pizza {'lg', 'thin', 'og', ['pepperoni', 'sausage']} |
| pizza price can be calculated with price prototype | myPizza.price() | 13 |
| 'Done' button opens a modal and shows created pizza's price | Click 'Done' | modal opens with '$13' |
| 'Done' button opens a modal and shows created pizza | Click 'Done' | modal opens with '$13' and 'Large, thin, original, pepperoni, sausage pizza' |

## Setup/Installation Requirements

* _Clone this repository_
* _Open a HTML file_
* _Open web browser of choice_

## Known Bugs
* Protozoa
* Porifera
* Nemathelminthes
* Mollusca
* Arthropoda


## Support and contact details

_Tony Fabery: tfabery@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2016 **_DWTFYW INC._**
