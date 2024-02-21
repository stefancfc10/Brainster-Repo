export const getUniqueValues = (data: any[]): any[] => {
    const uniqueData = new Set();

    data.forEach(el => uniqueData.add(el))

    return Array.from(uniqueData)
}

export enum FilterType {
    ALL = "all",
    GENDER = "gender",
    BRAND = "brand"
}
