// import React, { useState } from 'react';

// const SearchForm = ({ items }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearchInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Filter items based on search term
//     const results = items.filter(item =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchInputChange}
//           placeholder="Search..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {searchResults.length > 0 ? (
//           <ul>
//             {searchResults.map((result, index) => (
//               <li key={index}>{result.name}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No results found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchForm;
