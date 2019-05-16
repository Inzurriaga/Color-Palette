import React from "react";
import { postPalette } from "../postPalette"
import { addNewPalette } from "../../action"

describe("postPalette", () => {
    it('calls dispatch with postPalette', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                message: "palette deleted"
              })
          }))
       
        let mockDispatch = jest.fn()
        const thunk = postPalette()(mockDispatch)
        // thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(addNewPalette())
      })
})