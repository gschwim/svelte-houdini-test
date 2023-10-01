import { graphql } from '$houdini'

export const _houdini_load = graphql`
	query Char3a {
	  character(id: 3)
	  {
	    name
	  }
	  
	}`
