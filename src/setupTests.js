// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

describe('checkAPIs', ()=>{
    it('bad code', ()=>{
        expect(()=>{
        throw Error("Brak informacji o takim mieście")
        }).toThrow("Brak informacji o takim mieście")
    })

})
