export interface Motor {
  id: string,
  name: string,
  type: string,
  transmission: string,
  description: string,
  daily_rate: number,
  image_url: string,
  availability: boolean,
  created_at: string
}

export type Output = Array<Motor>;