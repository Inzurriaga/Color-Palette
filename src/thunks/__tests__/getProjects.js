import React from "react";
import { getProjects } from "../getProjects";
import { addNewProject } from "../../action"

describe("getProjects", () => {
    it('calls dispatch with deletePalette', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                message: "palette deleted"
              })
          }))
       
        let mockDispatch = jest.fn()
        const thunk = getProjects() 
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(addNewProject())
      })
})