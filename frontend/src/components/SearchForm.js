import React from 'react'
import {Form, Input} from 'react-bootstrap';
import './SearchForm.css';
export const SearchForm = ({
    handleSearchClear, 
    handleTypeChange, 
    handleSearchChange, 
    searchType, 
    searchContent
}) => {

  return (
    <Form>
        <Form.Group className='d-flex flex-row align-items-center mr-3'>
            <Form.Label className='search-label'>Search:</Form.Label>
            <div className='complex-search-bar'>
                <Form.Select className='search-type-select' value={searchType} onChange={handleTypeChange} name="search-select">
                    <option value="subject">Subject</option>
                    <option value="status">Status</option>
                    <option value="id">ID</option>
                </Form.Select>
                <input 
                    className='search-input'
                    value={searchContent}
                    onChange={handleSearchChange}
                    name="search-input"
                    placeholder="Search content..."
                />
                <a className='search-clear-button' onClick={handleSearchClear}>Clear</a>
            </div>
        </Form.Group>
    </Form>
  )
}
