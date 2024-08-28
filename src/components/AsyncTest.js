import {render,screen} from "@testing-library/react"
import Async from "./Async";


describe("Async Component" , ()=>{
    
    //test 1 if the posts are being rendered correctly  
    test("renders posts if request succeeds " , async()=>{


// USING JEST'S INBUILD jest.fn() to create a dummy function in the test 
window.fetch = jest.fn()
//applying the create function 
window.fetch.mockResolvedValueOnce({
    json: async ()=>[{id:"p1" , title:"First post"}]
});

        render(<Async/>)


       const listItemElements = await screen.findAllByRole("listitem");
       expect(listItemElements).not.toHaveLength(0);
    });
})