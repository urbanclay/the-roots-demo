export interface Artisan {
  id: string;
  name: string; // 店铺/作者名称
  material: string[]; // 材质: 陶, 瓷, 木, etc.
  vesselType: string[]; // 器型: 杯, 碗, 花瓶, etc.
  style: string[]; // 风格: 简约, 复古, 粗犷, etc.
  origin: string; // 来自何处
  yearsInBusiness: number; // 创业时长 (年)
  description: string; // 宣传详情介绍
  image_path?: string;
  
  // New Fields for B2B
  skuList: string[]; // 代表性 SKU
  annualTier: "S" | "A" | "B" | "C"; // 年度评级: S=星级玩家
  monthlyCapacity: number; // 月产能 (件)
}

export type SortOption = "newest" | "years_desc" | "years_asc";
