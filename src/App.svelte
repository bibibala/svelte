<script>
    import {Button, Grid, Row, Column,FileUploaderItem} from 'carbon-components-svelte';

    // let name = 'world';
    let theme = "g100"; // "white" | "g10" | "g80" | "g90" | "g100"

    function changeTheme() {
        $: document.documentElement.setAttribute("theme", theme);
    }
</script>

<Grid>
    <Row>
        <Column sm={2} md={12} lg={4}><Button>hello</Button></Column>
        <Column sm={2} md={12} lg={4}><Button>hello</Button></Column>
        <Column sm={2} md={12} lg={4}><Button>hello</Button></Column>
        <Column sm={2} md={12} lg={4}><Button>hello</Button></Column>
    </Row>
    <Row>
        <Column>
<!--            <FileUploaderItem></FileUploaderItem>-->
        </Column>
    </Row>
</Grid>
