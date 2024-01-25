export const pagenation = (items, current_page, per_page_items) => {
	if (items && !items?.message) {
		let page = current_page || 1,
		per_page = per_page_items || 10,
		offset = (page - 1) * per_page,
	
		paginatedItems = items?.slice(offset).slice(0, per_page_items),
		total_pages = Math?.ceil(items.length / per_page);
	
		return {
			data: paginatedItems
		};
	}
}