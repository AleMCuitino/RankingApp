import React from 'react'
import {FaSearch} from "react-icons/fa"
import { Button } from './SearchButtonStyle'

function SearchButton() {
  return (
    <Button>
      <span>Buscar...</span>
      <FaSearch />
    </Button>
  )
}

export default SearchButton