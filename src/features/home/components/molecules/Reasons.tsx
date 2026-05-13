'use client'
import { Reason } from '@/features/home/components/atoms/Reason'
import dynamic from 'next/dynamic'

/**
 * @description Renders the reasons component with dynamic import for server-side rendering.
 * @component
 * @param {object} props - Component properties.
 * @param {object[]} props.reasons - Accordion items rendered as reasons.
 * @param {string} props.reasons[].affirmation - Heading text for the accordion trigger.
 * @param {string} props.reasons[].resume - Body text displayed inside the accordion panel.
 * @param {number} props.reasons[].id - Unique key for each reason.
 * @returns Returns a dynamic import of the reason component.
 */
export const Reasons = dynamic(() => Promise.resolve(Reason), { ssr: false })
