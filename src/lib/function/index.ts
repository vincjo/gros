
export const download = (url: string, name = '') => {
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.setAttribute('href', url)
    a.setAttribute('download', name)
    a.click()
    document.body.removeChild(a)
}

export const s = (value: number | string | undefined) => {
    if (!value) return ''
    if (Number(value) === 0 || Number(value) === 1) return ''
    return 's'
}

export const formatNumber = (value: number | undefined | null) => { 
    if (value === 0) return '0'
    if (!value) return ''
    return new Intl.NumberFormat('fr-FR').format(value) ?? '0'
}

export const isNull = (value: unknown) => {
    if (value === null || value === undefined || value === '') return true
    return false
}

export const round = (value: number, precision = 3) => {
    return Number(value.toFixed(precision))
}