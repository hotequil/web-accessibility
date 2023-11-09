import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import routes from './routes'
import { NotUseCapitalizedText } from './pages/NotUseCapitalizedText'
import { ImageWithAlternativeText } from './pages/ImageWithAlternativeText'
import { NotUseClickHere } from './pages/NotUseClickHere'
import { LinkAsButtonAndButtonAsLink } from './pages/LinkAsButtonAndButtonAsLink'

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path={routes.notUseCapitalizedText} element={<NotUseCapitalizedText />} />
                    <Route path={routes.imageWithAlternativeText} element={<ImageWithAlternativeText />} />
                    <Route path={routes.notUseClickHere} element={<NotUseClickHere />} />
                    <Route path={routes.linkAsButtonAndButtonAsLink} element={<LinkAsButtonAndButtonAsLink />} />
                    <Route path="*" element={<Navigate to={routes.notUseCapitalizedText} replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}
