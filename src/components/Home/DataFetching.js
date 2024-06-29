import React, { useCallback, useEffect, useState } from 'react'

const withDataFetching = url => WrappedComponent => {
  const DataFetching = props => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchData = useCallback(async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      setLoading(false)
    }, [url])

    useEffect(() => {
      fetchData()
    }, [fetchData])

    return <WrappedComponent data={data} loading={loading} {...props} />
  }
  return DataFetching
}

export default withDataFetching
