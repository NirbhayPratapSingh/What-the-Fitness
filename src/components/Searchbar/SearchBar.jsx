import React from "react";
import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const SearchBar = () => {
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
				/>
			</div>
			<div className={styles.clearDiv}>Clear</div>
		</div>
	);
};

export default SearchBar;