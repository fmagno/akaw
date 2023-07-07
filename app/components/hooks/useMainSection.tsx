// import { useRouter } from 'next/router'
// import useWarnings from './useWarnings'
// import useMeteos from './useMeteo'
// import { Meteo, Sea, SeaDay, Warning } from '@/app/tools/clients/ipma/interface'
// import useSeas from './useSea'

// export type UseMainSectionHook = {
//   warnings: {
//     data: Warning[] | null | undefined
//     error: any | null
//     isValidating: boolean | null
//   }
//   meteos: {
//     data: Meteo | null | undefined
//     error: any | null
//     isValidating: boolean | null
//   }
//   seas: {
//     data: SeaDay[] | null | undefined
//     error: any | null
//     isValidating: boolean | null
//   }
// }

// function useMainSection(): UseMainSectionHook {
//   const {
//     warnings,
//     error: errorWarnings,
//     isValidating: isValidatingWarnings,
//   } = useWarnings()

//   const {
//     meteos,
//     error: errorMeteos,
//     isValidating: isValidatingMeteos,
//   } = useMeteos()

//   const { seas, error: errorSeas, isValidating: isValidatingSeas } = useSeas()

//   return {
//     warnings: {
//       data: warnings,
//       error: errorWarnings,
//       isValidating: isValidatingWarnings,
//     },
//     meteos: {
//       data: meteos,
//       error: errorMeteos,
//       isValidating: isValidatingMeteos,
//     },
//     seas: {
//       data: seas,
//       error: errorSeas,
//       isValidating: isValidatingSeas,
//     },
//   }
// }

// export default useMainSection
