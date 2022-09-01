import React from "react";
import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const SearchBar = (getGeoLoc) => {
	return (
		<div className={styles.searchBar_Container}>
			{/* iconDiv */}
			<div className={styles.iconDiv}>
				<BsSearch
					color="white"
					size={"1em"}
				/>
			</div>
			{/* serachInput */}
			<input
				color="white"
				className={styles.searchInput}
				placeholder="Search gym name here..."
			/>
			<div className={styles.locationIcon}>
				<MdLocationOn
					size={"2em"}
					color={"white"}
					onClick={()=>getGeoLoc.data()}
				/>
			</div>
			<div className={styles.clearDiv}>Clear</div>
		</div>
	);
};

export default SearchBar;