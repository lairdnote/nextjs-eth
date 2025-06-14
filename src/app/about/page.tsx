import { Tooltip } from '@/components/ui/tooltip'

function About() {
  return (
    <Tooltip label="这是一个提示" placement="top">
      <button>悬停我</button>
    </Tooltip>
  )
}

export default About;