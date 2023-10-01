import { graphql } from '$houdini'

export const _houdini_load = graphql`
	query Char4 {
	  character(id: 4)
	  {
	    name
	  }
	  
	}`
