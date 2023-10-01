Demo to reproduce houdinijs HMR error.

`[HMR][Svelte] Unrecoverable HMR error in <+page>: next update will trigger a full reload`
`+page.svelte:13 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'data')`  

Error does not occur on Home and No Graphql paths as neither has an associated graphql query via houdini.

Once the error comes up the entire page needs to be refreshed to get things working again.



