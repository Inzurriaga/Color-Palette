import React from "react";
import { deleteProject } from "../deleteProject"
import { deletePaletteInState } from "../../action"

describe("deleteProject", () => {
    it('calls dispatch with deletePalette', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                message: "project deleted"
              })
          }))
       
        let mockDispatch = jest.fn()
        const thunk = deleteProject() 
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(deletePaletteInState(5))
      })
})