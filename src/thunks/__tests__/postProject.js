import React from "react"
import { postProject } from "../postProject"
import { addNewProject } from "../../action"

describe("postProject", () => {
    it('calls dispatch with postProject', () => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                message: "palette deleted"
              })
          }))
       
        let mockDispatch = jest.fn()
        const thunk = postProject() 
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(addNewProject())
      })
})