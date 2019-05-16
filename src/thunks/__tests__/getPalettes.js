import React from "react";
import { getPalettes } from "../getPalettes";
import { initialPalette } from "../../action"

describe("getPalettes", () => {
    it('calls dispatch with deletePalette', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                palettes: [{},{},{}]
              })
          }))
       
        let mockDispatch = jest.fn()
        const thunk = getPalettes() 
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(initialPalette())
      })
})