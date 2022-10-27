import * as React from "react"
import { useColorMode } from "../hooks/useColorMode";

const Home = (props) => (
  <svg
  className="navIcons"
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="-10 0 40 30"
    style={{
      fill:useColorMode("black","#f5f5f5" )
    }}
    {...props}
  >
    <path d="M15 2a1 1 0 0 0-.7.285L3.394 11.207a1 1 0 0 0-.038.03l-.037.03v.003A1 1 0 0 0 3 12a1 1 0 0 0 1 1h1v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V13h1a1 1 0 0 0 1-1 1 1 0 0 0-.318-.732l-.016-.012a1 1 0 0 0-.068-.057L25 9.893V6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1.44l-6.322-5.172A1 1 0 0 0 15 2zm3 13h4v8h-4v-8z" />
  </svg>
)

export default Home