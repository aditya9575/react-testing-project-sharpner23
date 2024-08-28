import Greeting from "./Greeting"
import {render,screen} from "@testing-library/react"
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

describe("Greeting Component" , ()=>{

    test('renders Hello World as a text', () => { 
        // 1st we render the component we want to test so we import it here 
        render(<Greeting/>)
    
        //now we import screen and use it to find the element on the screen being rendered and use the inbuilt methods 
        // along with screen to find the content if present or not
       const helloWorldElement =  screen.getByText("Hello World")
    
       //now we use expect function to which we can pass our testing result value and on this we get various matchers to be used 
       expect(helloWorldElement).toBeInTheDocument();
     })

     test("renders It's good to see you! as a text on load" , ()=>{
        render(<Greeting/>)
        const changedTextFetch = screen.getByText("It's good to see you!" , {exact:false})
        expect(changedTextFetch).toBeInTheDocument();
     })

    // test for having the check for change on some sort of action like button press and for this we will be using another package 
    // that has been installed from a different library -> @testing-library/user-event
    test("renders Changed! text after button click", async () => {
        render(<Greeting />);
        
        const buttonElement = screen.getByRole("button");

        // Await the click event
        await userEvent.click(buttonElement);

        // Await the text check as it might take some time to change
        const outputElement = await screen.findByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    });

    test("does not render It's good to see you! if the button was clicked", async () => {
        render(<Greeting />);
        
        const buttonElement = screen.getByRole("button");

        // Await the click event
        await userEvent.click(buttonElement);

        // Check for the absence of the text
        const outputElement = screen.queryByText("It's good to see you!", { exact: false });
        expect(outputElement).toBeNull();
    });

})




