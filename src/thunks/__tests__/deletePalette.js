import React from "react";
import { deletePalette } from "../deletePalette"
import { deletePaletteInState} from "../../action"

describe("deletePalette", () => {
    it('calls dispatch with deletePalette', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                message: "palette deleted"
              })
          }))
       
        let mockDispatch = jest.fn()
        const thunk = deletePalette() 
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(deletePaletteInState())
      })
})