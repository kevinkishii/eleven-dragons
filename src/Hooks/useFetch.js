import { useState, useEffect, useCallback } from "react"

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  const getItems = useCallback(async () => {
    const response = await fetch(url)
    const elements = await response.json()
    setItems(elements)
    setLoading(false)
  }, [url])

  useEffect(() => {
    getItems()
  }, [url, getItems])
  return { loading, items }
}
