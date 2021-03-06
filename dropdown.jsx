/* 
Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components below, with example usage
  in the ExampleNav component. The Dropdown and DropdownItem components have some problems, and also 
  have room for improvements (doesn't everything?) A couple items TODO here (make sure to explain with comments!)
  
  0. How are you today? 😊
  1. Please fix any obvious issues you see with the dropdown.
  2. Please then make improvements to the dropdown.
  3. Consider the different ways that this dropdown might be used and what changes would
     be neccessary to make it more flexible.
  4. If we wanted to sync this dropdown selection to the server with
     app.sync('PATCH', 'user', { dropdown_1_state: {true,false} }) where would this be included?
  5. If we wanted to pass children (like this example) OR a Promise that resolves to an array of items
     what changes should be made? (just a sentence or two or some code is ok).
  
  PS: No need to worry about CSS.
 */

import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

  class Dropdown extends PureComponent {
    // Misspelled(Bug) 
    constructor(props) {
        super(props);
        this.state = {
          isOpen : false,
          currentSelection : "",
        };
        // Ensure 'this' works in callback
        this.toggle = this.toggle.bind(this);
    }
    


    toggle() {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
    
    setCurrentSelection(props){
      
      let currentSelection : {props.currentSelection};
    }

    render() {
      const {isOpen} = this.state;
      const {label} = this.props;

      return (
        <div className="dropdown">
          <button 
          type="button" 
          className="dropdown-button" 
          id="dropdownButton" 
          aria-haspopup="true" 
          aria-expanded={isOpen} 
          onClick={this.toggle}
          >
            {label}
          </button>
  
          <ul 
          style={{listStyleType: "none"}} 
          className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu`} 
          aria-labelledby="dropdownButton" 
          role="menu"
          >
            <div>{isOpen ? (this.props.children) : ("")}</div>
          </ul>
          
        </div>
      );
    }
  }
  
  class DropdownItem extends PureComponent {
    render() {
      return(
        <div>
          <button>{this.props.children}</button>
        </div>
      );
    }
  }
  
  class ExampleNav extends PureComponent {
    render() {
      return (
        <nav>
          <a href="/page1">Page 1</a>
          <Dropdown label="More items">
            <DropdownItem href="/page2">Page 2</DropdownItem>
            <DropdownItem href="/page3">Page 3</DropdownItem>
            <DropdownItem href="/page4">Page 4</DropdownItem>
          </Dropdown>
          <Dropdown label="Even more items">
            <DropdownItem href="/page5">Page 5</DropdownItem>
            <DropdownItem href="/page6">Page 6</DropdownItem>
          </Dropdown>
        </nav>
      );
    }
  }

  const element = <ExampleNav />;
  ReactDOM.render(element, document.getElementById('root'));